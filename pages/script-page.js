import { gql, useQuery } from '@apollo/client';

const CREATE_SCRIPT_TAG = gql`
    mutation scriptTagCreate($input: scriptTagInput!){
        scriptTagCreate(input: $input){
            scriptTag{
                id
            }
            userErrors{
                field
                message
            }
        }
    }

    `;

function ScriptPage(){
    return (
        <div>
            <h1> Hello this is a script page</h1>
        </div>
    )
}

export default ScriptPage;