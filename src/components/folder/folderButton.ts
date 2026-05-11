import { isEqualsTrue } from "@utils/isStrictTrue";
import { createTreeButton } from "@components/tree-button/treeButton";
import { createIconNode } from "@/utils/createIconNode";
import folderIcon from '@/assets/folder.svg';
import chevronIcon from '@/assets/chevron-down.svg';
import folderOpenedIcon from '@/assets/folder-open.svg';

const buttonIconsConfig = [
  { icon: chevronIcon, className: 'chevron-icon' },
  { icon: folderIcon, className: 'folder-icon' },
  { icon: folderOpenedIcon, className: 'folder-opened-icon' }
];

function setupFolderButton(buttonNode: HTMLElement, isOpened: boolean = false) {
  buttonNode.setAttribute('data-opened', isOpened ? 'true' : 'false')

  buttonNode.addEventListener('click', () => {
    const isFolderOpened = isEqualsTrue(buttonNode.getAttribute('data-opened') ?? 'false');
    buttonNode.setAttribute('data-opened', String(!isFolderOpened));
  });
}

function createButtonIcon() {
  const iconsWrapper = document.createElement('div');
  iconsWrapper.classList.add('folder-button__icons-wrapper');

  buttonIconsConfig.forEach(({ icon, className }) => {
    const node = createIconNode(icon, 'tree-button__icon');
    node.classList.add(className);
    iconsWrapper.appendChild(node);
  })

  return iconsWrapper;
}

export function createFolderButton(name: string, isActive?: boolean, isOpened?: boolean) {
  const icon = createButtonIcon();
  const buttonNode = createTreeButton(name, icon, 'folder-button', isActive);
  setupFolderButton(buttonNode, isOpened);
  return buttonNode;
}
