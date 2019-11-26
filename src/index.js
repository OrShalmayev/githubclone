import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
// Components
const FileList = ({files})=>(
    <>
        <table className="file-list">
            <tbody>
                {files.map( (f,i) =>(
                    <FileListItem file={f} key={f.id} />
                ))}
            </tbody>
        </table>
    </>
);

const FileListItem = ({file}) => (
    <tr className="file-list-item">
        <FileName file={file} />
        <CommitMessage commit={file.latestCommit} />
        <Time time={file.updated_at} />
    </tr>
);

const Time = ({time})=>(
    <td>{moment(time).fromNow()}</td>
);



const CommitMessage = ({commit}) => (
    <td>{commit.message}</td>
);

const FileName =({file}) =>(
    <>
        <td className="file-icon"><FileIcon file={file}/></td>
        <td className="file-name">{file.name}</td>
    </>
);

const FileIcon = ({file}) => {
    let icon;
    switch(file.type){
        case 'folder':
            icon = 'fas fa-folder'
            break;
        default:
        case 'file':
            icon = 'far fa-file-alt'
            break;
    }
    // return the JSX
    return (
        <i className={`${icon}`}></i>
    );
}


const data = [
    {
        id:1,
        name:'src',
        type:'folder',
        updated_at:'2019-07-07 21:21:22',
        latestCommit: {
            message: 'Initial commit'
        }
    },{
        id:2,
        name:'test',
        type:'folder',
        updated_at:'2019-07-07 21:21:22',
        latestCommit: {
            message: 'Initial commit'
        }
    },{
        id:3,
        name:'README',
        type:'file',
        updated_at:'2019-07-07 21:21:22',
        latestCommit: {
            message: 'Initial commit'
        }
    },
]
ReactDOM.render(
    <FileList files={data}/>,
    document.querySelector('#root')
);