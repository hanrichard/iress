# ucm-ui-lib

## Getting started

Add below lines to your `.npmrc` file so that you can publish and install packages, replace ${token} with your personal
gitlab token, and your token needs to have 'read api', 'write api', 'read registry' and 'write registry' permissions.

```
//gitlab.com/api/v4/projects/48524903/packages/npm/:_authToken=${token}
//gitlab.com/api/v4/packages/npm/:_authToken=${token}
@nsw-department-of-customer-service:registry=https://gitlab.com/api/v4/packages/npm/
```

If you can not find out where is your `.npmrc` file especially for `Windows` users, or you got multiple `.npmrc` files in different locations,
you can try command `npm config ls -l` and find `userconfig`, here is the `.npmrc` path

Download the project and build

```
git clone git@gitlab.com:nsw-department-of-customer-service/nsw-dcs/nswrevenue/revenuedigital/business-tax/ucm.git
cd ucm-main/ui/ucm-ui-lib
yarn install
yarn build
yarn test
```

## Start storybook

Currently, storybook is hosted on gitlab pages: https://nsw-department-of-customer-service.gitlab.io/nsw-dcs/nswrevenue/revenuedigital/business-tax/ucm/storybook

To view storybook we can run it locally

```
yarn storybook
```

## Packages structure

We support multiple packages in this repo. We put each package under packages' folder, and each package has a
package.json with package name and version configured.

## Publish

After we made commit(s) and pushed to gitlab, it will trigger a pipeline consisting of stages like build, test and publish.
Stage publish is a manual stage, it will automatically publish new versions after we triggered it.

# Pack and debug on local machine

Yarn pack locally

```
yarn build && yarn pack
```

The above command generates a tgz file
Put the tgz file in your parent project package.json
Eg.

```
"@nsw-department-of-customer-service/ucm-ui-lib": "/Users/alanlyu/workspace/ucm/ucm-main/ui/ucm-ui-library/nsw-department-of-customer-service-ucm-ui-lib-v1.0.0.tgz",
```

## Packages version control

Everytime you do a git commit, the pre-commit will run a npm version patch, so you do not need to change any version manually, but if you want to change a minor or major version, please change the package.json manually and push it.
