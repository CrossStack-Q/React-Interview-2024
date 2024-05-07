const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    items: [
        {
            id: "2",
            name: "public",
            isFolder: true,
            items: [

                {
                    id: "3",
                    name: "index.html",
                    isFolder: false,
                    items: []
                },
                {
                    id: "4",
                    name: "logo.png",
                    isFolder: false,
                    items: []
                }

            ]
        },
        {
            id: "5",
            name: "src",
            isFolder: true,
            items: [
                {
                    id:"6",
                    name:"components",
                    isFolder:true,
                    items:[
                        {
                            id:"7",
                            name:"Folder.js",
                            isFolder:false,
                            items:[]
                        }
                    ]
                },
                {
                    id: "8",
                    name: "App.js",
                    isFolder: false,
                    items: []
                },
                {
                    id: "9",
                    name: "index.js",
                    isFolder: false,
                    items: []
                }
            ]
        },
        {
            id: "10",
            name: "package.json",
            isFolder: false,
            items: []
        },
        {
            id: "11",
            name: "README.md",
            isFolder: false,
            items: []
        }
    ]
}

export default explorer;