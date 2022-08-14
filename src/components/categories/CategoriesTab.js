import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useAppContext } from "../../context/AppContextContainer";
import CategoriesList from "./CategoriesList";

function CategoriesTab() {
  const { categories, setSelectedCategory } = useAppContext();
  return (
    <Tabs>
      <TabList>
        {categories?.map((category) => (
          <Tab
            key={category?.id}
            onClick={() => {
              setSelectedCategory(category?.slug);
            }}
          >
            <span className="flex">
              <img src={category?.icon} className="w-4 mr-2" /> {category?.name}
            </span>
          </Tab>
        ))}
      </TabList>

      {/* {categories?.map((category) => (
        <TabPanel key={category?.id}>
          <CategoriesList />
        </TabPanel>
      ))} */}
    </Tabs>
  );
}

export default CategoriesTab;
