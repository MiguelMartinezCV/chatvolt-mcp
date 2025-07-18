import { getAgentTool, handleGetAgent } from "./getAgent.js";
import { createAgentTool, handleCreateAgent } from "./createAgent.js";
import { listAgentsTool, handleListAgents } from "./listAgents.js";
import {
  listCrmScenariosTool,
  handleListCrmScenarios,
} from "./listCrmScenarios.js";
import {
  createCrmScenarioTool,
  handleCreateCrmScenario,
} from "./createCrmScenario.js";
import {
  updateCrmScenarioTool,
  handleUpdateCrmScenario,
} from "./updateCrmScenario.js";
import {
  deleteCrmScenarioTool,
  handleDeleteCrmScenario,
} from "./deleteCrmScenario.js";
import {
  listCrmStepsTool,
  handleListCrmSteps,
} from "./listCrmSteps.js";
import {
  createCrmStepTool,
  handleCreateCrmStep,
} from "./createCrmStep.js";
import {
  updateCrmStepTool,
  handleUpdateCrmStep,
} from "./updateCrmStep.js";
import {
  deleteCrmStepTool,
  handleDeleteCrmStep,
} from "./deleteCrmStep.js";
import {
  enableDisableAgentIntegrationTool,
  handleEnableDisableAgentIntegration,
} from "./enableDisableAgentIntegration.js";
import {
  updateAgentTool,
  handleUpdateAgent,
} from "./updateAgent.js";
import { deleteAgentTool, handleDeleteAgent } from "./deleteAgent.js";
import { agentQueryTool, handleAgentQuery } from "./queryAgent.js";
import { listDatastoresTool, handleListDatastores } from "./listDatastores.js";
import { getDatastoreTool, handleGetDatastore } from "./getDatastore.js";
import { createDatasourceTool, handleCreateDatasource } from "./createDatasource.js";
import { createDatastoreTool, handleCreateDatastore } from "./createDatastore.js";
import { getDocumentationTool, handleGetDocumentation } from "./getDocumentation.js";
import { addHttpTool, handleAddHttpTool } from "./addHttpTool.js";
import { addDatastoreTool, handleAddDatastoreTool } from "./addDatastoreTool.js";
import { addDelayedResponsesTool, handleAddDelayedResponsesTool } from "./addDelayedResponsesTool.js";
import { addRequestHumanTool, handleAddRequestHumanTool } from "./addRequestHumanTool.js";
import { addMarkAsResolvedTool, handleAddMarkAsResolvedTool } from "./addMarkAsResolvedTool.js";
import { addFollowUpMessagesTool, handleAddFollowUpMessagesTool } from "./addFollowUpMessagesTool.js";

export const tools = [
  addFollowUpMessagesTool,
  addMarkAsResolvedTool,
  addRequestHumanTool,
  addDelayedResponsesTool,
  addDatastoreTool,
  addHttpTool,
  getAgentTool,
  createAgentTool,
  listAgentsTool,
  listCrmScenariosTool,
  createCrmScenarioTool,
  updateCrmScenarioTool,
  deleteCrmScenarioTool,
  listCrmStepsTool,
  createCrmStepTool,
  updateCrmStepTool,
  deleteCrmStepTool,
  enableDisableAgentIntegrationTool,
  updateAgentTool,
  deleteAgentTool,
  agentQueryTool,
  listDatastoresTool,
  getDatastoreTool,
  createDatasourceTool,
  createDatastoreTool,
  getDocumentationTool,
];
export const toolHandlers = {
  [getAgentTool.name]: handleGetAgent,
  [createAgentTool.name]: handleCreateAgent,
  [listAgentsTool.name]: handleListAgents,
  [listCrmScenariosTool.name]: handleListCrmScenarios,
  [createCrmScenarioTool.name]: handleCreateCrmScenario,
  [updateCrmScenarioTool.name]: handleUpdateCrmScenario,
  [deleteCrmScenarioTool.name]: handleDeleteCrmScenario,
  [listCrmStepsTool.name]: handleListCrmSteps,
  [createCrmStepTool.name]: handleCreateCrmStep,
  [updateCrmStepTool.name]: handleUpdateCrmStep,
  [deleteCrmStepTool.name]: handleDeleteCrmStep,
  [enableDisableAgentIntegrationTool.name]: handleEnableDisableAgentIntegration,
  [updateAgentTool.name]: handleUpdateAgent,
  [deleteAgentTool.name]: handleDeleteAgent,
  [agentQueryTool.name]: handleAgentQuery,
  [listDatastoresTool.name]: handleListDatastores,
  [getDatastoreTool.name]: handleGetDatastore,
  [createDatasourceTool.name]: handleCreateDatasource,
  [createDatastoreTool.name]: handleCreateDatastore,
  [getDocumentationTool.name]: handleGetDocumentation,
  [addHttpTool.name]: handleAddHttpTool,
  [addDatastoreTool.name]: handleAddDatastoreTool,
  [addDelayedResponsesTool.name]: handleAddDelayedResponsesTool,
  [addRequestHumanTool.name]: handleAddRequestHumanTool,
  [addMarkAsResolvedTool.name]: handleAddMarkAsResolvedTool,
  [addFollowUpMessagesTool.name]: handleAddFollowUpMessagesTool,
};