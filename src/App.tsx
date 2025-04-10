import { useSnapshot } from "valtio";
import { state } from "./state";

function App() {
	const snap = useSnapshot(state);
	return (
		<div className="text-center">
			<div className="text-9xl">Hello: {snap.count}</div>
			<button
				type="button"
				className="p-3 text-8xl border-2"
				onClick={() => state.inc()}
			>
				Up
			</button>
			<button
				type="button"
				className="p-3 text-8xl border-2"
				onClick={() => state.dec()}
			>
				Down
			</button>
		</div>
	);
}

export default App;
