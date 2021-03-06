import React from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./components/PrivateRoute";
import EventsPage from "./pages/Events/Events";
import ProfilePage from "./pages/Profile/Profile";
import CreateEvent from "./pages/CreateEvent/CreateEvent";
import RsvpEvent from "./pages/RsvpEvent/RsvpEvent";
import OrganizerEvent from "./pages/OrganizerEvent/OrganizerEvent";
import ParticipantEvent from "./pages/ParticipantEvent/ParticipantEvent";
import AddGift from "./pages/AddGift/AddGift";
import Loading from "./components/Loading";
import FooterComp from "./components/FooterComp/FooterComp";
import { Layout } from "antd";
import HomePage from "./pages/HomePage/HomePage";
import "./app.css";

const { Content } = Layout;

const AppContent = ({ isAuthenticated }) => {
	return (
		<Content className="site-layout">
			<Switch>
				{!isAuthenticated && <Route exact path="/" component={HomePage} />}
				{isAuthenticated && (
					<PrivateRoute exact path="/" component={EventsPage} />
				)}
				<PrivateRoute exact path="/events" component={EventsPage} />
				<PrivateRoute exact path="/profile" component={ProfilePage} />
				<PrivateRoute exact path="/events/create" component={CreateEvent} />
				<PrivateRoute
					exact
					path="/events/:id/organizer"
					component={OrganizerEvent}
				/>
				<PrivateRoute
					exact
					path="/events/:id/participant"
					component={ParticipantEvent}
				/>
				<PrivateRoute
					exact
					path="/events/:id/participant/:participantid/addgift"
					component={AddGift}
				/>
				<PrivateRoute
					exact
					path="/events/:id/rsvp/:participantid"
					component={RsvpEvent}
				/>
			</Switch>
		</Content>
	);
};

const App = () => {
	const { isLoading, isAuthenticated } = useAuth0();

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Layout>
			<NavigationBar />
			<Layout>
				<AppContent isAuthenticated={isAuthenticated} />
			</Layout>
			<FooterComp text={"Secret Santa App"} />
		</Layout>
	);
};

export { AppContent };
export default App;
