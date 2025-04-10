import * as v from "valibot";

export const fetchers = {
	getExample: async <T>(url: string): Promise<T> => {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return (await response.json()) as T;
	},

	postExample: async <T>(url: string, data: unknown): Promise<T> => {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return (await response.json()) as T;
	},
};

const exampleSchema = v.strictObject({
	foo: v.literal("bar"),
});

export const typedFetcher = {
	getExample: async () => {
		const response = await fetchers.getExample("");
		const parseResult = v.safeParse(exampleSchema, response);
		if (parseResult.success) {
			return parseResult.output;
		}
		console.log(parseResult.issues);
		throw new Error("Parsing failed");
	},
};
