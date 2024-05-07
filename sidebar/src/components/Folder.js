import React, { useState } from 'react'

function Folder({ handleInsertNode, explorer }) {

    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });

    const handleNewFolder = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
            setShowInput({
            visible: true,
            isFolder:isFolder
        })

    }

    const onAddFolder =(e)=>{
        if(e.keyCode ===13 && e.target.value){
            // add Logic
            handleInsertNode(explorer.id,e.target.value  , showInput.isFolder);
            setShowInput({...showInput,visible:false})
        }
    }

    if (explorer.isFolder) {
        return (
            <div style={{ margin: 10 }}>
                <div className='folder' style={{ display: "flex" }} onClick={() => {
                    setExpand(!expand)
                }}>
                    <span style={{ marginRight: 10 }}>
                        📁 {explorer.name}
                    </span>

                    <div>
                        <button onClick={(e) => { handleNewFolder(e, true) }} style={{ marginRight: 10 }}>Folder +</button>
                        <button onClick={(e) => { handleNewFolder(e, false) }} > File +</button>
                    </div>
                </div>
                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {
                        showInput.visible ? <div className='inputContainer'>
                            <span>
                                {showInput.isFolder?"Fol":"File"}
                            </span>
                            <input
                            onKeyDown={onAddFolder}
                            onBlur={()=>{
                                setShowInput({...showInput,visible: false})
                            }} type='text' autoFocus className='inputContainer__input'/>
                        </div> : (<div></div>)
                    }

                    {explorer.items.map((exp) => {
                        return (
                            <Folder handleInsertNode={handleInsertNode} explorer={exp} key={exp.id} />
                        )
                    })}
                </div>
            </div>
        )
    }
    else {
        return (
            <span className='file' style={{ display: "flex", padding: 5 }}>
                🗄️ {explorer.name}
            </span>
        )
    }
}

export default Folder