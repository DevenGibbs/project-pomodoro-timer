import React from "react";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";

function Subtitle({ aria, breakDuration, focusDuration, session, isTimerRunning }) {
    return (
        <div>
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
            {session && (<div className="row mb-2">
                <div className="col">
                    {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                    <h2 data-testid="session-title">
                    {session && session.label} for {minutesToDuration("0" + (session.label.toLowerCase().indexOf("ocus") > 0 ? focusDuration : breakDuration))} minutes
                    </h2>
                    {/* TODO: Update message below correctly format the time remaining in the current session */}
                    <p className="lead" data-testid="session-sub-title">
                    {session && secondsToDuration(session.timeRemaining)} remaining
                    {/* Onclick handler for focus time should also reset time remaining to the new "focus" time */}
                    </p>
                    {isTimerRunning ? "" : <h2>PAUSED</h2>}
                </div>
            </div>)}
            {session && <div className="row mb-2">
                <div className="col">
                    <div className="progress" style={{ height: "20px" }}>
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={aria} // TODO: Increase aria-valuenow as elapsed time increases
                        style={{ width: `${aria}%` }} // TODO: Increase width % as elapsed time increases
                    />
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Subtitle;