import React, { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Work, School, Star } from "@material-ui/icons";
import styled from "styled-components";
import kollabra from "../assets/kollabra.png";
import lab_knights from "../assets/lab_knights.jpg";
import procore from "../assets/procore.png";
import ucsb from "../assets/ucsb.png";
import ucsb_resnet from "../assets/ucsb_resnet.jpg";
import eit from "../assets/eit.jpg";
import westco from "../assets/westco.jpg";

const Logo = styled.img`
  height: 80px;
  width: 80px;
  object-fit: contain;
  padding-right: 20px;
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Experience = ({ logo, title, company, location, description }) => (
  <Fragment>
    <Flex>
      <Logo src={logo} alt="logo" />
      <div>
        <h3 className="vertical-timeline-element-title">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{company}</h4>
        <h5 className="vertical-timeline-element-subtitle">{location}</h5>
      </div>
    </Flex>
    <p>{description}</p>
  </Fragment>
);

const ExperienceTimeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2017 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Work />}
      >
        <Experience
          logo={procore}
          title="Group Engineering Manager"
          company="Procore Technologies, Inc"
          location="Carpinteria, CA"
          description="Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Oct 2015 - Oct 2017"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Work />}
      >
        <Experience
          logo={procore}
          title="Engineering Manager"
          company="Procore Technologies, Inc"
          location="Carpinteria, CA"
          description="Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Sept 2014 - October 2015"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Work />}
      >
        <Experience
          logo={procore}
          title="Software Engineer"
          company="Procore Technologies, Inc"
          location="Carpinteria, CA"
          description="Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="June 2013 - Sept 2014"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Work />}
      >
        <Experience
          logo={kollabra}
          title="Mechanical Engineer II"
          company="Kollabra Consulting"
          location="Goleta, CA"
          description="Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="June 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<School />}
      >
        <Experience
          logo={ucsb}
          title="B.S. Mechanical Engineering"
          company="University of California, Santa Barbara"
          location="Santa Barbara, CA"
          description="Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="March 2013 - June 2013"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<Work />}
      >
        <Experience
          logo={westco}
          title="Mechanical Engineer"
          company="Westco International"
          location="Goleta, CA"
          description="Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading"
        />{" "}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="March 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<School />}
      >
        <Experience
          logo={eit}
          title="Engineer in Training (EIT)"
          location="Santa Barbara, CA"
          description="Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Jan 2010 - March 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<Work />}
      >
        <Experience
          logo={ucsb_resnet}
          title="Lead Network Technician"
          company="UCSB ResNet"
          location="Santa Barbara, CA"
          description="Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="June 2009"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<School />}
      >
        <Experience
          logo={lab_knights}
          title="High School Diploma"
          company="LA Baptist High School"
          location=""
          description="Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading"
        />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<Star />}
      />
    </VerticalTimeline>
  );
};

export default ExperienceTimeline;
