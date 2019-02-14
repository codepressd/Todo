import "jest";

import * as Utils from "../utils";

describe("multiFire", () => {
    it("Should fire one function", () => {
        const mockToFire = jest.fn(x => x);
        Utils.multiFire(mockToFire)("hello")();
        expect(mockToFire).toBeCalled();
        expect(mockToFire.mock.results[0].value).toBe("hello");
    });

    it("Should fire two functions", () => {
        const mockToFire1 = jest.fn(x => x);
        const mockToFire2 = jest.fn(x => x);
        Utils.multiFire(mockToFire1, mockToFire2)("hello")();
        expect(mockToFire1).toBeCalled();
        expect(mockToFire1.mock.results[0].value).toBe("hello");
        expect(mockToFire2).toBeCalled();
        expect(mockToFire2.mock.results[0].value).toBe("hello");
    });
});

describe("createToggle", () => {
    it("Should fire toggle", () => {
        const mockToFire = jest.fn(x => x);
        Utils.createToggle(mockToFire)("TODO")();
        expect(mockToFire).toBeCalled();
        expect(mockToFire.mock.results[0].value).toBe("TODO");
    });
});

describe("createMultiClick", () => {
    it("Should add item to set", () => {
        const mockToFire1 = jest.fn(x => x);
        const data = new Set(["Hello", "HI"]);
        const expectedData = new Set(["Hello", "HI", "what"]);
        Utils.createMultiClick(mockToFire1, data)("ADD")("what");
        expect(mockToFire1).toBeCalled();
        expect(mockToFire1.mock.results[0].value).toEqual(expectedData);
    });

    it("Should remove item from set", () => {
        const mockToFire1 = jest.fn(x => x);
        const data = new Set(["Hello", "HI", "what"]);
        const expectedData = new Set(["Hello", "what"]);
        Utils.createMultiClick(mockToFire1, data)("DELETE")("HI");
        expect(mockToFire1).toBeCalled();
        expect(mockToFire1.mock.results[0].value).toEqual(expectedData);
    });
});
