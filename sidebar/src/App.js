import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import explorer from "./data/folderData"
import Folder from './components/Folder';
import useTraverseTree from './hooks/use-traverse-tree';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const {insertNode}= useTraverseTree();

  const handleInsertNode =(folderId,item,isFolder)=>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder)

    setExplorerData(finalTree)
  }
  
  return (
    <div className="">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/>
    </div>
  );
}

export default App;
