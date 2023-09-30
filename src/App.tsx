import { AppStateWReactOnly } from './components/1-state-w-react-only';
import { AppStateWValtio } from './components/2-state-w-valtio';

export function App() {
    return (
        <div style={{height: '100%', display: 'grid', gridTemplateRows: '1fr 1fr'}}>
            <AppStateWReactOnly />
            <AppStateWValtio />
        </div>
    );
}
