/**
 * Created by andrew on 10/02/2016.
 */

const roles = [
    'user',
    'admin',
    'super-admin'
];

let permissions = {
    default: [
        'profile.login',
        'profile.manageEmail',
        'profile.manageUsername',

        'models.list',
        'model.view',
        'model.create',
        'model.update',
        'model.delete',

        'steps.list',
        'step.view',
        'step.create',
        'step.update',
        'step.delete'
    ]
};

