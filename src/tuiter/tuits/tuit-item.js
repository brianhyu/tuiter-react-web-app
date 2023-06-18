import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";
import TuitStats from "./tuit-stats";


const TuitItem = ({ tuit }) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img width={50}
                 className="float-end rounded-circle"
                 src={`../images/${tuit.image}`}/>
          </div>
          <div className="col-10">
            <div>
              <i className="bi bi-x-lg float-end"
                 onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <span>
                        <div>
                            <span style={{ fontWeight: 'bold' }} >{tuit.username} </span>
                            <i className="bi bi-check-circle-fill" style={{color:"#2a9fd6"}}></i>
                            <small className="text-muted"> {tuit.handle}<i className="bi bi-dot"></i>{tuit.time} </small>
                        </div>
                    </span>
                        <p>{tuit.tuit}</p>
                        <TuitStats tuit={tuit} />
                    </div>

                </div>
            </div>
        </li>
    );
};

export default TuitItem;