import React, { Fragment } from "react"
import { Layout, AppProvider } from "../../components"
import { Link, ModalRoutingContext } from 'gatsby-plugin-modal-routing'

const ModalLayout
 = ({ children, ...rest }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      modal ? (
        <AppProvider>
          <Fragment>
            <Link to={closeTo}>
              Close
            </Link>
            {children}
          </Fragment>
        </AppProvider>
      ) : (
        <Layout { ...rest }>
          {children}
        </Layout>
      )
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalLayout
