# Namasthe_Food

## Parcel
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


## Check Questions on these topics
- Server side routing
- Client Side routing
  - react-router
  - react-router-dom  (<Link>, <NavLink>, <Form>, redirect, and useNavigate.)

## Redux Toolkit
- Redux Store - a big Global Object kept at a central place
   - Store
     - cart Slice
     - user Slice
     - ...multiple Slices
    
    # Write Data
     - UI Click - Dispatch Action - calls Reducer Function -> function(Reducer) internally modifies the Slice of redux store (cart)
 
     # ReadData
     - Using Selector read the data from Slice/Reducer Subscribing to the Store



## 3 Types Testing
   - Unit Testing -- testing with Isolation(just one component or one part of component)
   - Integration Testing  -- Testing Multiple components involved in each other ( eg. Search, adding items to carts from home/items)
   - End to End Testing - e2e Testing  -- Testing Full app (Tools: Cypress)

## Setting up Testing in our app
- install React Testing Library
- Installed Jest
- Installed Babel dependencies
- Configure Babel
- Congigure Parcel COnfig file to disable default Babel transpilation
- Jest Configuration
- Jest - npx create-jest  (this will create jest.config.js)
- Install jsdom library
- npm i -D @testing-library/jest-dom