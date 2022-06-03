import React , {useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { connect } from "react-redux";
import {
  Row,
  Col,
} from "reactstrap"

// Pages Components


import latestasks from "./latestasks";
//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../store/actions";
import Latestasks from "./latestasks";

const Dashboard = (props) => {

  const breadcrumbItems = [
    { title: "HiTask", link: "#" },
    { title: "Dashboard", link: "#" }
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Dashboard' , breadcrumbItems)
  },)

  const reports = [
    { title: "Orders", iconClass: "cube-outline", total: "1,587", average: "+11%", badgecolor: "info" },
    { title: "Revenue", iconClass: "buffer", total: "$46,782", average: "-29%", badgecolor: "danger" },
    { title: "Average Price", iconClass: "tag-text-outline", total: "$15.9", average: "0%", badgecolor: "warning" },
    { title: "Product Sold", iconClass: "briefcase-check", total: "1890", average: "+89%", badgecolor: "info" },
  ]

  return (
    <React.Fragment>

      <MetaTags>
        <title>Dashboard | HiTask</title>
      </MetaTags>

      {/*mimi widgets */}
      


      <Row>
        {/* <Col xl="6">
         
          <LatestTransactions />
        </Col> */}


          <Latestasks />
          
      </Row>

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(Dashboard);