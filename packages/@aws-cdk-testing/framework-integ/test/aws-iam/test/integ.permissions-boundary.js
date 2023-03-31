"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_cdk_lib_1 = require("aws-cdk-lib");
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const aws_iam_1 = require("aws-cdk-lib/aws-iam");
const app = new aws_cdk_lib_1.App();
const supportStack = new aws_cdk_lib_1.Stack(app, 'integ-permissions-boundary-support');
new aws_iam_1.ManagedPolicy(supportStack, 'PB', {
    statements: [new aws_iam_1.PolicyStatement({
            actions: ['*'],
            resources: ['*'],
        })],
    managedPolicyName: `cdk-${supportStack.synthesizer.bootstrapQualifier}-PermissionsBoundary-${supportStack.account}-${supportStack.region}`,
});
const stack = new aws_cdk_lib_1.Stack(app, 'integ-permissions-boundary', {
    env: {
        account: process.env.CDK_INTEG_ACCOUNT ?? process.env.CDK_DEFAULT_ACCOUNT,
        region: process.env.CDK_INTEG_REGION ?? process.env.CDK_DEFAULT_REGION,
    },
    permissionsBoundary: aws_cdk_lib_1.PermissionsBoundary.fromName('cdk-${Qualifier}-PermissionsBoundary-${AWS::AccountId}-${AWS::Region}'),
});
stack.addDependency(supportStack);
new aws_iam_1.Role(stack, 'TestRole', {
    assumedBy: new aws_iam_1.ServicePrincipal('sqs.amazonaws.com'),
});
new integ_tests_alpha_1.IntegTest(app, 'integ-test', {
    testCases: [stack],
    enableLookups: true,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcucGVybWlzc2lvbnMtYm91bmRhcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnRlZy5wZXJtaXNzaW9ucy1ib3VuZGFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUE4RDtBQUM5RCxrRUFBdUQ7QUFDdkQsaURBQTZGO0FBRTdGLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQUcsRUFBRSxDQUFDO0FBRXRCLE1BQU0sWUFBWSxHQUFHLElBQUksbUJBQUssQ0FBQyxHQUFHLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztBQUMxRSxJQUFJLHVCQUFhLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRTtJQUNwQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLHlCQUFlLENBQUM7WUFDL0IsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ2QsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDO1NBQ2pCLENBQUMsQ0FBQztJQUNILGlCQUFpQixFQUFFLE9BQU8sWUFBWSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0Isd0JBQXdCLFlBQVksQ0FBQyxPQUFPLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtDQUMzSSxDQUFDLENBQUM7QUFFSCxNQUFNLEtBQUssR0FBRyxJQUFJLG1CQUFLLENBQUMsR0FBRyxFQUFFLDRCQUE0QixFQUFFO0lBQ3pELEdBQUcsRUFBRTtRQUNILE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CO1FBQ3pFLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCO0tBRXZFO0lBQ0QsbUJBQW1CLEVBQUUsaUNBQW1CLENBQUMsUUFBUSxDQUFDLHVFQUF1RSxDQUFDO0NBQzNILENBQUMsQ0FBQztBQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFbEMsSUFBSSxjQUFJLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRTtJQUMxQixTQUFTLEVBQUUsSUFBSSwwQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztDQUNyRCxDQUFDLENBQUM7QUFFSCxJQUFJLDZCQUFTLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRTtJQUMvQixTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDbEIsYUFBYSxFQUFFLElBQUk7Q0FDcEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwLCBTdGFjaywgUGVybWlzc2lvbnNCb3VuZGFyeSB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IEludGVnVGVzdCB9IGZyb20gJ0Bhd3MtY2RrL2ludGVnLXRlc3RzLWFscGhhJztcbmltcG9ydCB7IFJvbGUsIFNlcnZpY2VQcmluY2lwYWwsIE1hbmFnZWRQb2xpY3ksIFBvbGljeVN0YXRlbWVudCB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1pYW0nO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5cbmNvbnN0IHN1cHBvcnRTdGFjayA9IG5ldyBTdGFjayhhcHAsICdpbnRlZy1wZXJtaXNzaW9ucy1ib3VuZGFyeS1zdXBwb3J0Jyk7XG5uZXcgTWFuYWdlZFBvbGljeShzdXBwb3J0U3RhY2ssICdQQicsIHtcbiAgc3RhdGVtZW50czogW25ldyBQb2xpY3lTdGF0ZW1lbnQoe1xuICAgIGFjdGlvbnM6IFsnKiddLFxuICAgIHJlc291cmNlczogWycqJ10sXG4gIH0pXSxcbiAgbWFuYWdlZFBvbGljeU5hbWU6IGBjZGstJHtzdXBwb3J0U3RhY2suc3ludGhlc2l6ZXIuYm9vdHN0cmFwUXVhbGlmaWVyfS1QZXJtaXNzaW9uc0JvdW5kYXJ5LSR7c3VwcG9ydFN0YWNrLmFjY291bnR9LSR7c3VwcG9ydFN0YWNrLnJlZ2lvbn1gLFxufSk7XG5cbmNvbnN0IHN0YWNrID0gbmV3IFN0YWNrKGFwcCwgJ2ludGVnLXBlcm1pc3Npb25zLWJvdW5kYXJ5Jywge1xuICBlbnY6IHtcbiAgICBhY2NvdW50OiBwcm9jZXNzLmVudi5DREtfSU5URUdfQUNDT1VOVCA/PyBwcm9jZXNzLmVudi5DREtfREVGQVVMVF9BQ0NPVU5ULFxuICAgIHJlZ2lvbjogcHJvY2Vzcy5lbnYuQ0RLX0lOVEVHX1JFR0lPTiA/PyBwcm9jZXNzLmVudi5DREtfREVGQVVMVF9SRUdJT04sXG5cbiAgfSxcbiAgcGVybWlzc2lvbnNCb3VuZGFyeTogUGVybWlzc2lvbnNCb3VuZGFyeS5mcm9tTmFtZSgnY2RrLSR7UXVhbGlmaWVyfS1QZXJtaXNzaW9uc0JvdW5kYXJ5LSR7QVdTOjpBY2NvdW50SWR9LSR7QVdTOjpSZWdpb259JyksXG59KTtcbnN0YWNrLmFkZERlcGVuZGVuY3koc3VwcG9ydFN0YWNrKTtcblxubmV3IFJvbGUoc3RhY2ssICdUZXN0Um9sZScsIHtcbiAgYXNzdW1lZEJ5OiBuZXcgU2VydmljZVByaW5jaXBhbCgnc3FzLmFtYXpvbmF3cy5jb20nKSxcbn0pO1xuXG5uZXcgSW50ZWdUZXN0KGFwcCwgJ2ludGVnLXRlc3QnLCB7XG4gIHRlc3RDYXNlczogW3N0YWNrXSxcbiAgZW5hYmxlTG9va3VwczogdHJ1ZSxcbn0pO1xuIl19