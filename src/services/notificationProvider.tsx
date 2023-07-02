import { Toast } from "primereact/toast";
import React, { createContext, useRef } from "react";

export const NotificationContext = createContext<React.MutableRefObject<Toast|null > |undefined>(undefined);


