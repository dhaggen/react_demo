import React from "react";
import {Button, Divider} from "@material-ui/core";
import {Field, Form, Formik} from "formik";
import FormLabel from "@material-ui/core/FormLabel";
import {DateFormatInput} from "material-ui-next-pickers";
import {BreadcrumbBar} from "../Utils/BreadcrumbBar";
import {
    ContentHeader,
    ContentHeaderNote,
    ContentHeaderSubtext,
    ContentHeaderTitle, DownloadLink
} from "../Sections/Content/ContentHeader";
import {Content, InnerFormContent} from "../Sections/Content/Content";



export const ExcelReport = () => {
    return(<>
        <ContentHeader>
            <ContentHeaderTitle>Excelrapport</ContentHeaderTitle>
            <ContentHeaderSubtext>Ladda ned en excelfil med data från din enhet</ContentHeaderSubtext>
            <ContentHeaderNote>
                <h5>Ladda ned 2018</h5>
                <DownloadLink>Exportera till excel</DownloadLink>
            </ContentHeaderNote>
        </ContentHeader>
        <Content>
            <BreadcrumbBar parentPath="/reports/" backText="Tillbaka till rapporter"/>
            <InnerFormContent>
                <h3>Innehåll</h3>
                <Divider/>
                <Formik onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
                    setSubmitting(false);
                }} initialValues={{dateRange: {from: "", to: ""}}}>
                    {({setFieldValue}) => (
                        <Form>
                            <FormLabel component="label">Data från och med</FormLabel>
                            <Field name="dateRange.from" >
                                {({field}: any) => (
                                    <DateFormatInput name={field.name} onChange={(value) => setFieldValue(field.name, value)} value={field.value}/>
                                )}
                            </Field>
                            <FormLabel component="label">till och med</FormLabel>
                            <Field name="dateRange.to" >
                                {({field}: any) => (
                                    <DateFormatInput name={field.name} onChange={(value) => setFieldValue(field.name, value)} value={field.value}/>
                                )}
                            </Field>
                            <Button type="submit">Hämta excelrapport</Button>
                        </Form>
                    )}
                </Formik>
            </InnerFormContent>
        </Content>
    </>);
};