/**
 * Gets or Sets values in local storage
 * @param getOrSet
 * @param type
 * @param values
 */
export const getAndStoreValues = (
    getOrSet: "GET" | "SET",
    type: "TODO" | "COMPLETE",
    values?: string,
) => {
    let valuesToReturn = undefined;
    switch (getOrSet) {
        case "GET":
            const storedValues = localStorage.getItem(type);
            valuesToReturn = storedValues && (JSON.parse(storedValues) as string[]);
            break;
        case "SET":
            values && localStorage.setItem(type, values);
            break;
        default:
            break;
    }
    return valuesToReturn;
};

/**
 * Takes in set
 * @param setState
 */
export const createToggle = (setState: React.Dispatch<React.SetStateAction<string>>) => (
    listType: "TODO" | "COMPLETE",
) => () => {
    setState(listType);
};

/**
 * This curried function takes in setState hook and and the data
 * and depending on the action and updates the data accordingly
 * @param setState
 * @param data
 */
export const createMultiClick = (
    setState: React.Dispatch<React.SetStateAction<any>>,
    data: Set<string>,
    type?: "TODO" | "COMPLETE",
) => (action: "ADD" | "DELETE") => (value: string) => {
    const newData = new Set(data);
    action === "ADD" ? newData.add(value) : newData.delete(value);
    setState(newData);

    // If a type is provided we store the data
    type && getAndStoreValues("SET", type, JSON.stringify(convertSet(newData)));
};

/**
 * Takes in up to two function and fires them. N
 * @param first required
 * @param second
 */
export const multiFire = (first: (value: string) => void, second?: (value: string) => void) => (
    value: string,
) => () => {
    first(value);
    second && second(value);
};

/**
 * Feeling the Set was not the best storage type...
 * I went with Set so you couldn't add duplicates
 * @param data
 */
export const convertSet = (data: Set<string> | string[]) => {
    return Array.isArray(data) ? new Set(data) : Array.from(data);
};

/**
 * This goes out and grabs
 */
export const grabStoredValues = () => {
    const todos = getAndStoreValues("GET", "TODO");
    const complete = getAndStoreValues("GET", "COMPLETE");
    return {
        todos: todos ? new Set(todos) : undefined,
        complete: complete ? new Set(complete) : undefined,
    };
};
