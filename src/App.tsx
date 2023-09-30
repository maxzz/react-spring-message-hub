import { AppStateWReactOnly } from './components/1-state-w-react-only';

export function App() {
    return (
        <div style={{height: '100%', backgroundColor: 'salmon', display: 'grid', gridTemplateRows: '1fr 1fr'}}>
            <AppStateWReactOnly />
        </div>
    );
}
