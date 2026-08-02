import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const fallbackConfig = {
  apiKey: "demo-api-key",
  authDomain: "demo-app.firebaseapp.com",
  projectId: "demo-app",
  storageBucket: "demo-app.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:000000000000"
};

const app = getApps().length === 0 ? initializeApp(fallbackConfig) : getApps()[0];
export const db = getFirestore(app);
export const auth = getAuth(app);

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
  }
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  return errInfo;
}

export async function submitInquiry(data: Partial<{ name: string, email: string, phone: string, type: string, company: string, details: string }>) {
  try {
    const payload = {
      ...data,
      status: 'new',
      createdAt: serverTimestamp()
    };
    await addDoc(collection(db, 'inquiries'), payload);
  } catch (error) {
    const errInfo = handleFirestoreError(error, OperationType.CREATE, 'inquiries');
    throw new Error(errInfo.error);
  }
}

export async function submitOrder(data: any) {
  try {
    const payload = {
      ...data,
      status: 'pending',
      createdAt: serverTimestamp()
    };
    console.log("Submitting order payload:", payload);
    await addDoc(collection(db, 'orders'), payload);
  } catch (error) {
    const errInfo = handleFirestoreError(error, OperationType.CREATE, 'orders');
    throw new Error(errInfo.error);
  }
}
