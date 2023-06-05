import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {likeTuit} from "../reducers/tuits-reducer";

const TuitStats = ({ tuit }) => {

    const dispatch = useDispatch()

    const likeClickHandler = (id) => {
        dispatch(likeTuit(id));
    };

    return (
        <div className="row mt-2">

            <div className="col">
                <i className="bi bi-chat-square me-2"></i>
                {tuit.replies}
            </div>

            <div className="col">
                <i className="bi bi-arrow-repeat me-2"></i>
                {tuit.retuits}
            </div>

            <div className="col" onClick={() => likeClickHandler(tuit._id)}>
                {tuit.liked &&
                    <i className="bi bi-heart-fill me-2" style={{ color: tuit.liked ? 'red' : "white" }}></i>
                }
                {!tuit.liked &&
                    <i className="bi bi-heart me-2"></i>
                }
                {tuit.likes}
            </div>

            <div className="col">
                <i className="bi bi-box-arrow-up-right me-2"></i>
            </div>

        </div>
    )
}

export default TuitStats;