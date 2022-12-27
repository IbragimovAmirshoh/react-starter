import { lazy, Suspense } from 'react';
import { Loader } from './components';
import { useAuth } from './hooks';

const Private = lazy(() => import('./Private'));
const Public = lazy(() => import('./Public'));

function App() {
  const { token } = useAuth(true);

  if (token) {
    return (
      <Suspense fallback={<Loader />}>
        <Private />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<Loader />}>
      <Public />
    </Suspense>
  );
}

export default App;
