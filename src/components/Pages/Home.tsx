import React from "react";
import Paper from "@material-ui/core/Paper";
import FormLabel from "@material-ui/core/FormLabel";
import {Redirect} from "react-router";

export const Home = () => {
    return(<>
            <h3>
                Välj Patient
            </h3>
            <Paper className="test" elevation={0} square={true}>
                <Redirect to={"/reports/"} />
                <FormLabel component="label">Ange personnummer för patienten du vill arbeta med.</FormLabel>
            </Paper>
        </>
    );
};