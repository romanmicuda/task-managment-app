import React, { useDebugValue, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTodo } from "./TodoProvider";
import { Group } from "../types";

const SideBar = () => {
  const { groups, setGroups } = useTodo();
  const [expandedGroup, setExpandedGroup] = useState<Set<string>>(new Set());
  const [newListName, setNewListName] = useState<string>("");
  const [newListGroupName, setNewListGroupName] = useState<string>("");
  const [newGroupName, setNewGroupName] = useState<string>("");
  const [listTypes, setNewListType] = useState([
    "My day",
    "Important",
    "Planned",
    "Tasks",
  ]);

  const handleExpandedGroup = (groupName: string) => {
    if (expandedGroup.has(groupName)) {
      setExpandedGroup((prevExpandedGroup) => {
        const newExpanedGroup = new Set(prevExpandedGroup);
        newExpanedGroup.delete(groupName);
        return newExpanedGroup;
      });
    } else {
      setExpandedGroup((prevExpandedGroup) => {
        return new Set(prevExpandedGroup).add(groupName);
      });
    }
  };

  const handleAddGroup = () => {
    if (newGroupName.trim().length === 0) return;
    setGroups((prevGroups) => [
      ...prevGroups,
      { name: newGroupName, groupList: [] },
    ]);
  };

  const handleAddList = () => {
    if (newListName.trim().length === 0) return;
    setGroups((prevGroup) => [
      ...prevGroup.map((group) =>
        group.name === newListGroupName
          ? {
              name: group.name,
              groupList: [...group.groupList, { name: newListName, lists: [] }],
            }
          : group
      ),
    ]);
    setNewListGroupName("");
    setNewListName("");
  };

  return (
    <div>
      <nav>
        <ul>
          {listTypes.map((listType) => (
            <li>
              <Link to={`filter/${listType}`}>{listType}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <ul>
          {groups.map((group) => (
            <li
              key={group.name}
              onClick={() => handleExpandedGroup(group.name)}
            >
              {group.name}
              <ul>
                {expandedGroup.has(group.name) &&
                  group.groupList.map((groupList) => (
                    <li>
                      <Link to={`list/${groupList.name}`}>
                        {groupList.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <div>
          <input
            type="text"
            required
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            placeholder="Enter a new list"
          />
          <select
            value={newListGroupName}
            onChange={(e) => setNewListGroupName(e.target.value)}
          >
            <option value="" disabled>
              Default
            </option>
            {groups.map((group) => (
              <option value={group.name} key={group.name}>
                {group.name}
              </option>
            ))}
          </select>
          <button onClick={() => handleAddList()}>Add List</button>
        </div>
        <div>
          <input
            type="text"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            placeholder="Enter a new group"
          />
          <button onClick={handleAddGroup}>Add group</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SideBar;
