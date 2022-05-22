const baseStorybookConfig = {
    core: {
        builder: 'webpack5'
    },
    stories: [
        `${process.cwd()}/stories/**/*.stories.@(js|tsx)`
    ],
    reactOptions: {
        fastRefresh: true
    },
    addons: [
        '@storybook/addon-essentials',
        '@storybook/addon-links'
    ]
};

module.exports = baseStorybookConfig;