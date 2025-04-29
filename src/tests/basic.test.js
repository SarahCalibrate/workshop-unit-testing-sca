import { HelloWorldServiceImpl } from "../services/implementation/hello-world.service";

describe("HelloWorldServiceImpl", () => {
    test('returns correct string', async() => {
        const service = new HelloWorldServiceImpl();
        const expected = 'Hello, World!';

        const result = await service.helloWorld();

        expect(result).toBe(expected);
    });
});