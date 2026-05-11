import { setupHashPusher } from "@utils/setupHashPusher";
import { createFolderButton } from "./folderButton";
import './folderNode.css';

function createFolderElement(name?: string, tagName: keyof HTMLElementTagNameMap = 'div') {
  const el = document.createElement(tagName);
  el.classList.add(name ? `folder__${name}` : 'folder');
  return el;
}

export function createFolderNode(name: string, path: string, isOpened?: boolean, isActive?: boolean) {
  const folderRootNode = createFolderElement();
  const buttonNode = setupHashPusher(createFolderButton(name, isActive, isOpened), path);
  const childListWrapper = createFolderElement('children');

  [buttonNode, childListWrapper].forEach((node) => folderRootNode.appendChild(node))

  return { folderRootNode, childListWrapper };
}
