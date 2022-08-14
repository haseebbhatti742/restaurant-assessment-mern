import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useAppContext } from "../../context/AppContextContainer";

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
            <span className="flex ">
              <img
                src={category?.icon}
                className="w-8 mr-2"
                alt={category?.id}
              />
              <p className="text-lg">{category?.name}</p>
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
