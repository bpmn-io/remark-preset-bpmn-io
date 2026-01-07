import bpmnIoPlugin from 'eslint-plugin-bpmn-io';

const files = {
  build: [
    'eslint.config.js'
  ]
};

export default [

  // build
  ...bpmnIoPlugin.configs.node.map(config => {

    return {
      ...config,
      files: files.build
    };
  }),

  // lib
  ...bpmnIoPlugin.configs.recommended.map(config => {

    return {
      ...config,
      ignores: files.build
    };
  })
];