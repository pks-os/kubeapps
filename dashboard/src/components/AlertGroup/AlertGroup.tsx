import { AlertGroupTypes, AlertSizes, AlertStatusTypes } from "@clr/core/alert";
import { CdsAlert, CdsAlertActions, CdsAlertGroup } from "@clr/react/alert";
import * as React from "react";

export interface IAlertGroupProps {
  children: React.ReactNode;
  alertActions?: string | JSX.Element;
  closable?: boolean;
  status?: AlertStatusTypes;
  type?: AlertGroupTypes;
  size?: AlertSizes;
}

// Opinionated wrapper of Clarity AlertGroup
// https://clarity.design/storybook/core/?path=/story/components-alert-group-getting-started--page
export default function AlertGroup({
  alertActions,
  closable,
  status = "danger",
  type = "default",
  size = "default",
  children,
}: IAlertGroupProps) {
  const [closed, setClosed] = React.useState(false);
  const close = () => setClosed(true);
  return (
    <CdsAlertGroup status={status} type={type} hidden={closed} size={size}>
      <CdsAlert closable={closable} onCloseChange={close}>
        {children}
        {alertActions && <CdsAlertActions>{alertActions}</CdsAlertActions>}
      </CdsAlert>
    </CdsAlertGroup>
  );
}
