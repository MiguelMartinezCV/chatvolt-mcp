import { CallToolRequest } from "@modelcontextprotocol/sdk/types.js";
import { jest, describe, it, expect, beforeEach } from "@jest/globals";
import type { handleGetAgent } from "./tools/getAgent.js";
import type { handleCreateAgent } from "./tools/createAgent.js";
import type * as ChatvoltService from "./services/chatvolt.js";

jest.unstable_mockModule("./services/chatvolt.js", () => ({
  getAgentById: jest.fn(),
  createAgent: jest.fn(),
  deleteAgent: jest.fn(),
  agentQuery: jest.fn(),
  createDatasource: jest.fn(),
}));

const {
  getAgentById,
  createAgent,
  deleteAgent,
  agentQuery,
  createDatasource,
} = (await import("./services/chatvolt.js")) as typeof ChatvoltService;

const { handleGetAgent: handleGetAgentFn } = await import(
  "./tools/getAgent.js"
);
const { handleCreateAgent: handleCreateAgentFn } = await import(
  "./tools/createAgent.js"
);
const { handleDeleteAgent: handleDeleteAgentFn } = await import(
  "./tools/deleteAgent.js"
);
const { handleAgentQuery: handleAgentQueryFn } = await import(
  "./tools/queryAgent.js"
);
const { handleCreateDatasource: handleCreateDatasourceFn } = await import(
  "./tools/createDatasource.js"
);

const mockedGetAgentById = getAgentById as jest.MockedFunction<
  typeof getAgentById
>;
const mockedCreateAgent = createAgent as jest.MockedFunction<
  typeof createAgent
>;
const mockedDeleteAgent = deleteAgent as jest.MockedFunction<
  typeof deleteAgent
>;
const mockedAgentQuery = agentQuery as jest.MockedFunction<typeof agentQuery>;
const mockedCreateDatasource = createDatasource as jest.MockedFunction<
  typeof createDatasource
>;

describe("Tool Handlers", () => {
  beforeEach(() => {
    mockedGetAgentById.mockReset();
    mockedCreateAgent.mockReset();
    mockedDeleteAgent.mockReset();
    mockedAgentQuery.mockReset();
    mockedCreateDatasource.mockReset();
  });

  describe("handleGetAgent", () => {
    it("should call getAgent with the correct parameters", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "get_agent",
          arguments: { id: "123" },
        },
      };
      mockedGetAgentById.mockResolvedValue({
        id: "123",
        name: "Test Agent",
      });

      await handleGetAgentFn(request);

      expect(mockedGetAgentById).toHaveBeenCalledWith("123");
    });

    it("should throw an error if id is missing", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "get_agent",
          arguments: {},
        },
      };

      await expect(handleGetAgentFn(request)).rejects.toThrow(
        "'id' is a required argument."
      );
    });
  });

  describe("handleCreateAgent", () => {
    it("should create an agent with all required parameters", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "create_agent",
          arguments: {
            name: "Test Agent",
            modelName: "gpt-4",
          },
        },
      };
      const expectedAgent = {
        id: "1",
        name: "Test Agent",
        modelName: "gpt-4",
      };
      mockedCreateAgent.mockResolvedValue(expectedAgent);
      const result = await handleCreateAgentFn(request);
      expect(mockedCreateAgent).toHaveBeenCalledWith({
        name: "Test Agent",
        modelName: "gpt-4",
        description: undefined,
        systemPrompt: undefined,
      });
      expect(result.content[0].text).toEqual(
        JSON.stringify(expectedAgent, null, 2)
      );
    });

    it("should create an agent with both required and optional parameters", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "create_agent",
          arguments: {
            name: "Full Agent",
            modelName: "gpt-4",
            description: "A full agent.",
            systemPrompt: "You are a helpful assistant.",
          },
        },
      };
      const expectedAgent = {
        id: "2",
        name: "Full Agent",
        modelName: "gpt-4",
        description: "A full agent.",
        systemPrompt: "You are a helpful assistant.",
      };
      mockedCreateAgent.mockResolvedValue(expectedAgent);
      const result = await handleCreateAgentFn(request);
      expect(mockedCreateAgent).toHaveBeenCalledWith({
        name: "Full Agent",
        modelName: "gpt-4",
        description: "A full agent.",
        systemPrompt: "You are a helpful assistant.",
      });
      expect(result.content[0].text).toEqual(
        JSON.stringify(expectedAgent, null, 2)
      );
    });

    it("should throw an error if required parameters are missing", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "create_agent",
          arguments: {
            name: "Missing Model",
          },
        },
      };
      await expect(handleCreateAgentFn(request)).rejects.toThrow(
        "'name' and 'modelName' are required arguments."
      );
    });

    it("should handle invalid parameter types by converting them to strings", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "create_agent",
          arguments: {
            name: 123,
            modelName: true,
          },
        },
      };
      const expectedAgent = {
        id: "3",
        name: "123",
        modelName: "true",
      };
      mockedCreateAgent.mockResolvedValue(expectedAgent);
      const result = await handleCreateAgentFn(request);
      expect(mockedCreateAgent).toHaveBeenCalledWith({
        name: "123",
        modelName: "true",
        description: undefined,
        systemPrompt: undefined,
      });
      expect(result.content[0].text).toEqual(
        JSON.stringify(expectedAgent, null, 2)
      );
    });
  });

  describe("handleDeleteAgent", () => {
    it("should call deleteAgent with the correct parameters", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "delete_agent",
          arguments: { id: "123" },
        },
      };
      mockedDeleteAgent.mockResolvedValue({
        id: "123",
        name: "Test Agent",
      });

      await handleDeleteAgentFn(request);

      expect(mockedDeleteAgent).toHaveBeenCalledWith("123");
    });

    it("should throw an error if id is missing", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "delete_agent",
          arguments: {},
        },
      };

      await expect(handleDeleteAgentFn(request)).rejects.toThrow(
        "'id' is a required argument."
      );
    });
  });

  describe("handleAgentQuery", () => {
    it("should call agentQuery with the correct parameters", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "agent_query",
          arguments: { id: "123", query: "Hello" },
        },
      };
      mockedAgentQuery.mockResolvedValue({
        answer: "Hi there!",
      });

      await handleAgentQueryFn(request);

      expect(mockedAgentQuery).toHaveBeenCalledWith("123", {
        query: "Hello",
      });
    });

    it("should throw an error if id is missing", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "agent_query",
          arguments: { query: "Hello" },
        },
      };

      await expect(handleAgentQueryFn(request)).rejects.toThrow(
        "'id' is a required argument."
      );
    });
  });

  describe("handleCreateDatasource", () => {
    it("should create a datasource with all required parameters", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "create_datasource",
          arguments: {
            datastoreId: "ds-123",
            name: "Test Datasource",
            text: "This is a test.",
          },
        },
      };
      const expectedDatasource = {
        id: "1",
        datastoreId: "ds-123",
        name: "Test Datasource",
        type: "file",
      };
      mockedCreateDatasource.mockResolvedValue(expectedDatasource);
      const result = await handleCreateDatasourceFn(request);
      expect(mockedCreateDatasource).toHaveBeenCalledWith({
        datastoreId: "ds-123",
        name: "Test Datasource",
        type: "file",
        config: {
          text: "This is a test.",
        },
      });
      expect(result.content[0].text).toEqual(
        JSON.stringify(expectedDatasource, null, 2)
      );
    });

    it("should throw an error if required parameters are missing", async () => {
      const request: CallToolRequest = {
        method: "tools/call",
        params: {
          name: "create_datasource",
          arguments: {
            name: "Missing Datastore ID",
          },
        },
      };
      await expect(handleCreateDatasourceFn(request)).rejects.toThrow(
        "'datastoreId', 'name' and 'text' are required arguments."
      );
    });
  });
});