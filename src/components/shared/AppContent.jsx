import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CContainer, CSpinner } from "@coreui/react";

// routes config
import routes from "../../pages/routes";

const AppContent = () => (
  <CContainer lg>
    <Suspense
      fallback={(
        <div className="pt-3 text-center">
          <CSpinner color="primary" />
        </div>
      )}
    >
      <Routes>
        {routes.map(
          (route, idx) => route.element && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            ),
        )}
        <Route path="/" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </Suspense>
  </CContainer>
);

export default React.memo(AppContent);
