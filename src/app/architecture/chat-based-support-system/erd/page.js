'use client'

import {PhotoProvider, PhotoView} from "react-photo-view";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import ChatBasedSupportCenterErd from "../../../../../public/ChatBasedSupportCenter_ERD.png";
import ChatSessionLogJson from "../../../../../public/ChatSessionLogJson.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/pro-solid-svg-icons";
import Link from "next/link";

export default function ErdChatBasedSupportCenter() {
    return (
        <>
            <Link href="/architecture/chat-based-support-system">
                <FontAwesomeIcon icon={faFile}/> Design Overview
            </Link>
            <h1 className="font-bold text-4xl my-8" id="components">Database Structure</h1>
            <h2 className="font-bold text-3xl my-6">Entity Relationship Diagram</h2>
            <PhotoProvider>
                <PhotoView src="/ChatBasedSupportCenter_ERD.png">
                    <Tooltip title="Click or tap to view" arrow followCursor placement="top">
                        <Image
                            src={ChatBasedSupportCenterErd}
                            alt="entity relationship diagram of the chat-based support center"
                            width={900}
                            height={500}
                        />
                    </Tooltip>
                </PhotoView>
            </PhotoProvider>
            <h2 className="font-bold text-3xl my-6">Key Entities</h2>

            <ol className="fa-ul">
                <li>User</li>
                <li>Profile</li>
                <li>Role</li>
                <li>Address (Optional, depending on requirements)</li>
                <li>Contact Information</li>
                <li>Authentication (if storing authentication details)</li>
                <li>Chat Session (if linking to chat history)</li>
                <li>Notification Preferences (if managing user-specific notification settings)</li>
            </ol>

            <h2 className="font-bold text-3xl my-6">Relationships</h2>

            <ul className="fa-ul">
                <li><strong>User</strong> has one <strong>Profile</strong>.</li>
                <li><strong>User</strong> has one or many <strong>Roles</strong>.</li>
                <li><strong>User</strong> may have one or many <strong>Addresses</strong>.</li>
                <li><strong>User</strong> has one or many <strong>Contact Information</strong> records.</li>
                <li><strong>User</strong> has one <strong>Authentication</strong> record.</li>
                <li><strong>User</strong> may have many <strong>Chat Sessions</strong>.</li>
                <li><strong>User</strong> has one <strong>Notification Preferences</strong> record.</li>
            </ul>

            <h2 className="font-bold text-3xl my-6">Tentative Statuses of Chat Sessions</h2>
            <ul className="fa-ul">
                <li><strong>Created</strong>: The session has been created but has not yet been picked up by an agent or
                    started.
                </li>
                <li><strong>Active</strong>: The session is currently ongoing, with active communication between the
                    user and the agent.
                </li>
                <li><strong>Concluded</strong>: The session has ended, either because the issue was resolved, or the
                    chat was otherwise terminated.
                </li>
            </ul>
            <p>
                We can sort chat sessions by their status to prioritize them for agents. For example, sessions with the
                created status can be sorted to appear first, so agents can quickly see and pick up new sessions that
                haven’t yet been handled.
            </p>
            <h2 className="font-bold text-3xl my-6">Chat Session Log with MongoDB</h2>
            <p>To store a chat session log in a MongoDB collection, we would typically create a document structure that
                captures all the relevant information about the chat session, including metadata about the session and
                the messages exchanged during the session. Here’s a guide on how to structure the data:</p>
            <PhotoProvider>
                <PhotoView src="/ChatSessionLogJson.png">
                    <Tooltip title="Click or tap to view" arrow followCursor placement="top">
                        <Image
                            src={ChatSessionLogJson}
                            alt="entity relationship diagram of the chat-based support center"
                            width={900}
                            height={500}
                        />
                    </Tooltip>
                </PhotoView>
            </PhotoProvider>
        </>
    )
}
