import { MemoryRouter } from "react-router-dom";
import { node } from "prop-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";

import { FavoritesContext } from "./contexts";

const queryClient = new QueryClient();

const customRender = (ui, options = {}) => {
  // eslint-disable-next-line react-refresh/only-export-components
  const TestApp = ({ children }) => (
    <QueryClientProvider client={queryClient}>
      <FavoritesContext.Provider>
        <MemoryRouter initialEntries={options.initialEntries}>
          {children}
        </MemoryRouter>
      </FavoritesContext.Provider>
    </QueryClientProvider>
  );

  TestApp.propTypes = {
    children: node,
  };

  return render(ui, { wrapper: TestApp, ...options });
};

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";

export { customRender as render };
