
const AppError = require('../utils/AppError');
const Project = require('../models/Project');
const Session = require('../models/Session');

const createProject = async (req, res) => {
  const { machineId, os, path, name, description } = req.body;

  let project = await Project.findOne({ machineId, os, path });

  if (project) {
    const sessions = await Session.find({ projectId: project._id });
    return res.helper.success({ project, sessions }, 'Project already exists');
  }

  project = await Project.create({ machineId, os, path, name, description });
  const session = await Session.create({ projectId: project._id });
  
  res.helper.success({ project, sessions: [session] }, 'Project created successfully', 201);
};

const getProjects = (req, res) => {
  // TODO: Implement getProjects
  throw new AppError('Not Implemented').setCode(AppError.CODES.NOT_IMPLEMENTED);
};

const getProject = (req, res) => {
  // TODO: Implement getProject
  throw new AppError('Not Implemented').setCode(AppError.CODES.NOT_IMPLEMENTED);
};

const updateProject = (req, res) => {
  // TODO: Implement updateProject
  throw new AppError('Not Implemented').setCode(AppError.CODES.NOT_IMPLEMENTED);
};

module.exports = {
  createProject,
  getProjects,
  getProject,
  updateProject,
};
