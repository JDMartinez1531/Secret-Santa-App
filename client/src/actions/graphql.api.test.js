import React from "react";
import { render } from "@testing-library/react";
import {
	graphQLClient,
	processWithClient,
	createEvent,
	getUserEvents,
	createParticipant,
	getParticipantsbyEventId,
	getEventByEventId,
	deleteEvent,
	getParticipantByEventIdAndEmail,
	createGift,
	autoAssignSecretSanta,
	participantAcceptedInvite,
	participantRejectedInvite,
} from "./graphql.api";
import { GraphQLClient } from "graphql-request";

jest.mock("graphql-request");

const onSuccess = jest.fn();
const onError = jest.fn();

afterEach(() => {
	jest.clearAllMocks();
});

const user = { given_name: "name", family_name: "familiy", email: "email" };

const mockGrapgqlClient = (answer) => {
	GraphQLClient.mockImplementation(() => {
		return {
			request: jest.fn(() => answer),
		};
	});
};

const mockGrapgqlClientSuccess = (answer) => {
	mockGrapgqlClient(Promise.resolve(answer));
};

const mockGrapgqlClientError = (error) => {
	mockGrapgqlClient(Promise.reject(error));
};

describe("graph apis", () => {
	test("creates client with token", () => {
		const client = graphQLClient("token");
		expect(client).not.toBeNull();
		expect(GraphQLClient).toHaveBeenCalledTimes(1);
	});

	test("process with client", () => {
		mockGrapgqlClientSuccess({ createEvent: { id: 1 } });
		processWithClient("token", "query", {}, onSuccess, onError);
		expect(GraphQLClient).toHaveBeenCalledTimes(1);
	});

	const values = {
		date: "date",
		title: "title",
		time: [1, 2],
		location: "location",
	};

	test("handles success", () => {
		mockGrapgqlClientSuccess({ createEvent: { id: 1 } });
		createEvent(values, user, "token", onSuccess, onError);
	});

	test("handles error", () => {
		mockGrapgqlClientError("error");
		createEvent(values, user, "token", onSuccess, onError);
	});

	test("process get user events", () => {
		mockGrapgqlClientSuccess({});
		getUserEvents(user, "token", onSuccess, onError);
	});

	test("process get participant by event", () => {
		mockGrapgqlClientSuccess({});
		getParticipantsbyEventId(1, "token", onSuccess, onError);
	});

	test("create participant on success", () => {
		mockGrapgqlClientSuccess({});
		createParticipant(
			"",
			"",
			"",
			() => {},
			1,
			() => {},
			() => {}
		);
	});

	test("create participant on error", () => {
		mockGrapgqlClientError("error");
		createParticipant(
			"",
			"",
			"",
			() => {},
			1,
			() => {},
			() => {}
		);
	});

	test("process get user event by eventId", () => {
		mockGrapgqlClientSuccess({});
		getEventByEventId(
			1,
			"token",
			() => {},
			() => {}
		);
	});

	test("process delete event success", () => {
		mockGrapgqlClientSuccess(1);
		deleteEvent(
			1,
			"token",
			() => {},
			() => {}
		);
	});

	test("process getParticipantByEventIdAndEmail success", () => {
		mockGrapgqlClientSuccess(1);
		getParticipantByEventIdAndEmail(
			1,
			"token",
			() => {},
			() => {}
		);
	});

	test("process createGift success", () => {
		mockGrapgqlClientSuccess(1);
		createGift(
			"desc",
			"link",
			12.99,
			"token",
			() => {},
			() => {}
		);
	});

	test("process autoAssignSecretSanta success", () => {
		mockGrapgqlClientSuccess({});
		autoAssignSecretSanta(
			1,
			"token",
			() => {},
			() => {}
		);
	});

	test("process participantAcceptedInvite success", () => {
		mockGrapgqlClientSuccess(1);
		participantAcceptedInvite(
			1,
			"token",
			() => {},
			() => {}
		);
	});

	test("process participantRejectedInvite success", () => {
		mockGrapgqlClientSuccess(1);
		participantRejectedInvite(
			1,
			"token",
			() => {},
			() => {}
		);
	});
});
