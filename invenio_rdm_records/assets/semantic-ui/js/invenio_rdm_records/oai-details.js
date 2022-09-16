// This file is part of InvenioRdmRecords
// Copyright (C) 2022 CERN.
//
// Invenio RDM is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React from "react";
import ReactDOM from "react-dom";
import _get from "lodash/get";
import LinksTable from "./LinksTable";
import AdminDetailsView from "@js/invenio_administration/details/AdminDetailsView.js";

const domContainer = document.getElementById("invenio-details-config");
const title = domContainer.dataset.title;
const fields = JSON.parse(domContainer.dataset.fields);
const pidValue = JSON.parse(domContainer.dataset.pid);
const resourceName = JSON.parse(domContainer.dataset.resourceName);
const displayEdit = JSON.parse(domContainer.dataset.displayEdit);
const displayDelete = JSON.parse(domContainer.dataset.displayDelete);
const actions = JSON.parse(domContainer.dataset.actions);
const apiEndpoint = _get(domContainer.dataset, "apiEndpoint");
const idKeyPath = JSON.parse(_get(domContainer.dataset, "pidPath", "pid"));
const listUIEndpoint = domContainer.dataset.listEndpoint;

domContainer &&
  ReactDOM.render(
    <AdminDetailsView
      title={title}
      actions={actions}
      apiEndpoint={apiEndpoint}
      columns={fields}
      displayDelete={displayDelete}
      displayEdit={displayEdit}
      pid={pidValue}
      idKeyPath={idKeyPath}
      resourceName={resourceName}
      listUIEndpoint={listUIEndpoint}
    >
      <LinksTable />
    </AdminDetailsView>,
    domContainer
  );
