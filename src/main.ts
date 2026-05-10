import { createTree } from './components/tree';
import tree from './fs.json';
import './style.css'
import type { FileSystemModel, FileSystemRecordModel } from './types/TreeModel';

function fakeRequest(): Promise<FileSystemModel> {
  return new Promise((res) => {
    setTimeout(() => res(tree as FileSystemModel), 3000)
  })
}

async function init() {
  const rootElement = document.querySelector<HTMLDivElement>('#app');
  if (!rootElement) throw new Error('Root element not found!');

  rootElement.textContent = 'Идет загрузка...';
  try {
    const data = await fakeRequest();
    rootElement.textContent = null;
    createTree(
      rootElement,
      data.root as FileSystemRecordModel,
      [],
      decodeURIComponent(window.location.hash.slice(1))
    );
  } catch (e) {
    throw new Error(String(e))
  }
}

init();
