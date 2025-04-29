// hello-world.controller.test.ts
import { HelloWorldController } from "../controllers/hello-world.controller";
import { HelloWorldService } from "../services/hello-world.service";
import { HelloWorldServiceImpl } from "../services/implementation/hello-world.service";

import { Request, Response } from "express";
import httpMocks from "node-mocks-http";

describe("HelloWorldController", () => {
    test("helloWorld returns 200 with JSON data", async () => {
        // Mock the service
        const mockService: Partial<HelloWorldService> = {
            helloWorld: jest.fn().mockResolvedValue("Hello, World!"),
        };


        const controller = new HelloWorldController(mockService as HelloWorldService);
        const req = httpMocks.createRequest<Request>();
        const res = httpMocks.createResponse<Response>();

        await controller.helloWorld(req, res);

        // Assertions
        expect(res.statusCode).toBe(200);
        const json = res._getJSONData();
        expect(json).toEqual({ data: "Hello, World!" });
    });
});
