Dashboard table; pair with StatusBadge in cells.

```jsx
<DataTable
  columns={["Pipeline", "Status", "Last run"]}
  rows={[["Ingest / CRM", <StatusBadge status="active">Running</StatusBadge>, "2m ago"]]}
/>
```
