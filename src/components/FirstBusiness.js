import React from "react"
import Typography from '@material-ui/core/Typography'

const FirstBusiness = () => {
    return(
        <div>
            <br />
            <br />
            <div class="title">
                <Typography variant="h3" align="center">
                4th Tap Brewing Cooperative
                </Typography>
            </div>
            <br />
            <br />
            <br />
            <div class="description">
                <Typography align="center">
                Spacious worker-owned microbrewery with picnic tables & a projector screen in an industrial taproom.
                </Typography>
            </div>
            <br />
            <br />
            <div class="hours">
                <Typography align="center">
                3pm - 8pm
                </Typography>
            </div>
            <br />
            <br />
            <div class="address">
                <Typography align="center">
                10615 Metric Blvd, Austin, TX 78758
                </Typography>
            </div>
        </div>
    )
}

export default FirstBusiness