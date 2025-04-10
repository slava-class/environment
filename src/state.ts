import { proxy } from "valtio";

class State {
	count = 0;
	name = "foo";

	inc() {
		++this.count;
	}

	dec() {
		--this.count;
	}

	setName(name: string) {
		this.name = name;
	}
}

export const state = proxy(new State());
