import { LoginForm, TabSheet, TabSheetTab } from "@vaadin/react-components";
import ViewBooks from "./library/@index";

export default function HomeView() {

  return (
    <div style={{textAlign:'center'}}>
      <h1>ABC Library</h1>
      
      <TabSheet>
      <p>Welcome to ABC Library</p>
        <TabSheetTab label="Issue Books">
          <ViewBooks/>
        </TabSheetTab>

        <TabSheetTab label="Add/Update Books">
          <div>This is the add book tab content</div>
        </TabSheetTab>

      </TabSheet>
    </div>
  );
}

