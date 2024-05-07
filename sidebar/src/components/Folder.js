import React, { useState } from 'react'

function Folder({ explorer }) {

    const [expand, setExpand] = useState(false);

    if (explorer.isFolder) {
        return (
            <div style={{ margin: 10 }}>
                <div className='folder' style={{display:"flex"}} onClick={() => {
                    setExpand(!expand)
                }}>
                    <span style={{marginRight:10}}>
                        📁 {explorer.name}
                    </span>

                    <div>
                        <button style={{marginRight:10}}>Folder +</button>
                        <button> File +</button>
                    </div>
                </div>
                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {explorer.items.map((exp) => {
                        return (
                            <Folder explorer={exp} key={exp.id} />
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