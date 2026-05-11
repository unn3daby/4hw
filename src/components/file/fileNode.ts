import { setupHashPusher } from '@/utils/setupHashPusher';
import { createTreeButton } from '../tree-button/treeButton';
import fileIcon from '@/assets/file.svg'

export function createFileNode(name: string, path: string, isActive?: boolean) {
  return setupHashPusher(createTreeButton(name, fileIcon, 'file__button', isActive), path);
}
